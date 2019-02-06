import * as moment from "moment";
import { Moment } from "moment";

moment.locale("ru");

export class DateConverterService {
    public static toMoment(date: string): Moment {
        return moment(date).clone();
    }

    public static toString(date?: Moment | null, format?: string): string {
        if (!date) {
            return "";
        }

        return date.format(format || "YYYY-MM-DDTHH:mm:ss");
    }

    public static toApiString(date: Moment): string {
        return DateConverterService.toString(date);
    }
}
