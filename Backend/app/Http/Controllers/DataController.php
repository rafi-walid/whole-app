<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
class DataController extends Controller
{
    
    public function fetchAttributes(Request $request)
    {
        $type = $request->input('type');
        Log::info("Received type: {$type}");
        $tableName = '';

        switch ($type) {
            case 'Lead':
                $tableName = 'leads'; 
                break;
            case 'Opportunity':
                $tableName = 'opportunities';
                break;
            case 'rdv':
                $tableName = 'rdv'; 
                break;
            case 'commerciale':
                $tableName = 'commerciales'; 
                break;
            default:
                return response()->json(['error' => 'Invalid type'], 400);
        }

            $result = DB::select("EXEC GetColumnsWithType @tableName = ?", [$tableName]);

            return response()->json($result);
    }
                
    private function attributes_maker($arrayattr, $stringattr, $tableabv) {

        $resultString = $stringattr;
    
        foreach ($arrayattr as $attr) {
            $resultString .= $tableabv . $attr . ", ";
        }
        $resultString = rtrim($resultString, ', ');
        
        return $resultString;
    }
         
    
    public function fetchData(Request $request)
    {
        $ModelName = $request->tableName;
        $leadsattr = $request->input('leadsattr');
        $opportunitiesattr = $request->input('opportunitiesattr');
        $commercialesattr = $request->input('commercialesattr');
        $rdvattr = $request->input('rdvattr');
    
        $lattr = null;
        $cattr = null;
        $oattr = null;
        $rattr = null;
    
        switch ($ModelName) {
            case 'Lead':
                $tableName = 'leads';
                $lattr = $this->attributes_maker($leadsattr, $lattr, 't1.');
                $cattr = $this->attributes_maker($commercialesattr, $cattr, 't2.');
                break;
            case 'Opportunity':
                $tableName = 'opportunities';
                $oattr = $this->attributes_maker($opportunitiesattr, $oattr, 't1.');
                $cattr = $this->attributes_maker($commercialesattr, $cattr, 't2.');
                $lattr = $this->attributes_maker($leadsattr, $lattr, 't3.');
                break;
            case 'rdv':
                $tableName = 'rdv';
                $rattr = $this->attributes_maker($rdvattr, $rattr, 't1.');
                $cattr = $this->attributes_maker($commercialesattr, $cattr, 't2.');
                $lattr = $this->attributes_maker($leadsattr, $lattr, 't3.');
                break;
            case 'commerciale':
                $tableName = 'commerciales';
                $cattr = $this->attributes_maker($commercialesattr, $cattr, '');
                break;
            default:
                return response()->json(['error' => 'Invalid type'], 400);
        }
    
        $result = DB::select('EXEC GetData @tableName = ?, @leadsattr = ?, @commercialesattr = ?, @opportunitiesattr = ?, @rdvattr = ?', [
            $tableName,
            $lattr,
            $cattr,
            $oattr,
            $rattr
        ]);
    
        return response()->json($result);
    }
    
            
            
}


