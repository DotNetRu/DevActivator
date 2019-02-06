import { Pipe, PipeTransform } from "@angular/core";
import { Moment } from "moment";
import { DateConverterService } from "./date-converter.service";

@Pipe({ name: "datetime" })
export class DatetimePipe implements PipeTransform {
    public transform(date: Moment | undefined | null, format?: string): string {
        return DateConverterService.toString(date, format);
    }
}
