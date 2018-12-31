import { Doctor } from './doctor';
import { Patient } from './patient';
export class Consultation {
    id: number ;
    note: string;
    date: Date;
    doctor: Doctor;
    patient: Patient;
}
