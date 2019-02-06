import { NgModule } from "@angular/core";

import { DateConverterService } from "./date-converter.service";
import { DatetimePipe } from "./datetime.pipe";
import { HttpService } from "./http.service";
import { LayoutService } from "./layout.service";
import { PatternErrorMessagePipe } from "./pattern-error-message.pipe";
import { RequiredErrorMessagePipe } from "./required-error-message.pipe";

@NgModule({
    declarations: [
        DatetimePipe,
        PatternErrorMessagePipe,
        RequiredErrorMessagePipe,
    ],
    exports: [
        DatetimePipe,
        PatternErrorMessagePipe,
        RequiredErrorMessagePipe,
    ],
    providers: [
        DateConverterService,
        HttpService,
        LayoutService,
    ],
})
export class CoreModule { }
