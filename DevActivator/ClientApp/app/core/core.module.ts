import { NgModule } from "@angular/core";

import { DateConverterService } from "./date-converter.service";
import { HttpService } from "./http.service";
import { LayoutService } from "./layout.service";
import { PatternErrorMessagePipe } from "./pattern-error-message.pipe";
import { RequiredErrorMessagePipe } from "./required-error-message.pipe";

@NgModule({
    declarations: [
        PatternErrorMessagePipe,
        RequiredErrorMessagePipe,
    ],
    exports: [
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
