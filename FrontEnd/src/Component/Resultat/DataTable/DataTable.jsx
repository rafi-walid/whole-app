import React, { useState, useEffect } from 'react';
import './DataTable.css';
import DTHeader from './DTHeader';
import "jspdf-autotable";
import jsPDF from 'jspdf';
import ExcelJS from 'exceljs';
import Header from '../../Layout/Header/Header';
import Pagination from './Pagination';
import MontantDDM from './MontantDDM';
import { useSelector } from 'react-redux';

const DataTable = () => {
    const data = useSelector((state) => state.data);
    const attributesSelected = useSelector((state) => state.attributesSelected);
    const [searchInput, setSearchInput] = useState("");
    const [sortOrder, setSortOrder] = useState({ column: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    
    const filteredData = data.filter(item => {
        return Object.values(item).join(' ').toLowerCase().includes(searchInput.toLowerCase());
    });

    
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOrder.column && sortOrder.direction) {
            const comparison = a[sortOrder.column].localeCompare(b[sortOrder.column]);
            return sortOrder.direction === 'asc' ? comparison : -comparison;
        }
        return 0;
    });

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

    
    const handleSort = (column) => {
        setSortOrder({
            column,
            direction: sortOrder.column === column && sortOrder.direction === 'asc' ? 'desc' : 'asc'
        });
    };

    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    
    const updateRowsPerPage = (newValue) => {
        setRowsPerPage(newValue);
    };
    const exportToPDF = () => {
        const doc = new jsPDF();
        let totalPagesExp;
    
        
        totalPagesExp = Math.ceil(sortedData.length / rowsPerPage);
    
        
        for (let i = 1; i <= totalPagesExp; i++) {
            
            if (i > 1) {
                doc.addPage();
            }
    
            
            doc.autoTable({
                head: [attributesSelected],
                body: sortedData.slice((i - 1) * rowsPerPage, i * rowsPerPage).map(row => attributesSelected.map(attr => row[attr])),
            });
    
            
            const pageCountStr = `Page ${i} of ${totalPagesExp}`;
            doc.text(pageCountStr, 14, doc.internal.pageSize.height - 10);
        }
    
        doc.save('table.pdf');
    };
    const exportToXLS = () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');
    
        // Add column headers
        worksheet.addRow(attributesSelected);
    
        // Add all rows from all pages
        sortedData.forEach(rowData => {
            const row = [];
            attributesSelected.forEach(attr => {
                row.push(rowData[attr]);
            });
            worksheet.addRow(row);
        });
    
        // Generate buffer
        workbook.xlsx.writeBuffer().then(buffer => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const fileName = 'table.xlsx';
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, fileName);
            } else {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                }, 0);
            }
        });
    };
    
    

    
    const tableRows = currentRows.map((rowData, index) => (
        <tr className='table_body_row' key={index}>
            {attributesSelected.map((attr, idx) => (
                <td className='tbody_td' key={idx}>
                    {rowData[attr]}
                </td>
            ))}
        </tr>
    ));

    return (
        <div>
            <Header title='Create a rapport' />
            <div className='table_Container'>
                <DTHeader rowsPerPage={rowsPerPage} updateRowsPerPage={updateRowsPerPage} searchInput={searchInput} setSearchInput={setSearchInput} filteredData={filteredData} exportToPDF={exportToPDF} exportToXLS={exportToXLS} />
                <table className='DataTable'>
                    <thead>
                        <tr className='table_head_row'>
                            {attributesSelected.map((attr, index) => (
                                <th key={index}>
                                    <button className='thead_buttons' onClick={() => handleSort(attr)}>
                                        <span>{attr}</span>
                                        <i className="bi bi-arrow-down-up"></i>
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
                <Pagination currentPage={currentPage} paginate={paginate} sampleData={sortedData} rowsPerPage={rowsPerPage} />
            </div>
        </div>
    )
}

export default DataTable;
