import { IAcceptedFile } from './accepted-file';
import { IRejectedFile } from './rejected-file';

export interface IVerifiedFiles {
    acceptedFiles: IAcceptedFile[];
    rejectedFiles: IRejectedFile[];
}
