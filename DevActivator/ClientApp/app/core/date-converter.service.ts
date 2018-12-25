import * as moment from "moment";
import { Moment } from "moment";

moment.locale("ru");

export class DateConverterService {
    public static toMoment(date: string): Moment {
        return moment(date).clone();
    }

    public static toApiString(date: Moment): string {
        return date.format("YYYY-MM-DDTHH:mm:ss");
    }
}
