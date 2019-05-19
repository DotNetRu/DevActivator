import { IAcceptedFile } from './accepted-file';
import { RejectionReason } from './rejection-reason';

export interface IRejectedFile extends IAcceptedFile {
    reason: RejectionReason;
}
