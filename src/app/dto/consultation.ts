import { Doctor } from './doctor';
import { Patient } from './patient';
export class Consultation {
    note: string;
    date: Date;
    doctor: Doctor;
    patient: Patient;
}
