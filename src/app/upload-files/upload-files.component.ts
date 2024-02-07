import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ServicesService } from '../expressdb/services.service';
@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css'
})
export class UploadFilesComponent {


  userName:any;
    Personal_Care:any;
    Accommodation:any;
    Transport:any;
    Entertainment:any;
    date_range:any;
    card_id:any;

 statement:any;
  
  private excelFile: File | null = null;
  public jsonOutput: any;

  constructor(private http: HttpClient,private db:ServicesService) {}

  onFileChange(event: any): void {
    this.excelFile = event.target.files[0];
  }

  convertToJson(): void {
    if (this.excelFile) {
      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        const data: Uint8Array = new Uint8Array(e.target.result);
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet is the one you want to convert
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

        // Convert to JSON
        this.jsonOutput = XLSX.utils.sheet_to_json(worksheet, { raw: false });
        console.log(typeof(this.jsonOutput))
        
      
        this.statement={
          userName:this.jsonOutput[0].userName,
          Personal_Care:this.jsonOutput[0].Personal_Care,
          Accommodation:this.jsonOutput[0].Accommodation,
          Transport:this.jsonOutput[0].Transport,
          Entertainment:this.jsonOutput[0].Entertainment,
          date_range:this.jsonOutput[0].date_range,
          card_id:this.card_id
        };
       this.db.postStatement(this.statement).subscribe((result)=>{
        alert(result);
       })
       console.log(this.statement);
        // if(this.jsonOutput!=null){
        //   Swal.fire({
        //     title:'File Submited',
        //     icon:'success',
        //     text:'Thank you'
        //   })
        // }
        // else{
        //   Swal.fire({
        //     title:'Failed',
        //     icon:'error',
        //     text:'Check Your File'
        //   })
        // }
      };

      reader.readAsArrayBuffer(this.excelFile);
    }
   
  }

 



}
