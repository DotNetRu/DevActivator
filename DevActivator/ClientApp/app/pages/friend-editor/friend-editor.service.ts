import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API_ENDPOINTS, HttpService, LayoutService } from "@dotnetru/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { IFriend } from "./interfaces";

@Injectable()
export class FriendEditorService {
    public static getDefaultFriend(): IFriend {
        return { id: "", name: "", url: "", description: "" };
    }

    private _friend$: BehaviorSubject<IFriend | null> = new BehaviorSubject<IFriend | null>(null);
    private _dataStore = {
        friend: {} as IFriend,
    };

    public get friend$(): Observable<IFriend> {
        return this._friend$.pipe(
            filter((x) => x !== null),
            map((x) => x as IFriend),
        );
    }

    constructor(
        private _layoutService: LayoutService,
        private _httpService: HttpService,
        private _router: Router,
    ) { }

    public hasChanges(friend: IFriend): boolean {
        return JSON.stringify(friend) !== JSON.stringify(this._dataStore.friend);
    }

    public fetchFriend(friendId: string): void {
        this._httpService.get<IFriend>(
            API_ENDPOINTS.getFriendUrl.replace("{{friendId}}", friendId),
            (friend: IFriend) => {
                this._dataStore.friend = friend;
                this._friend$.next(Object.assign({}, this._dataStore.friend));
            });
    }

    public addFriend(friend: IFriend, cb: (friend: IFriend) => void): void {
        this._httpService.post<IFriend>(
            API_ENDPOINTS.addFriendUrl,
            friend,
            (res: IFriend) => {
                this._layoutService.showInfo("Друг добавлен успешно");
                cb(res);
            },
        );
    }

    public updateFriend(friend: IFriend, cb: () => void): void {
        this._httpService.post<IFriend>(
            API_ENDPOINTS.updateFriendUrl,
            friend,
            (x: IFriend) => {
                this._layoutService.showInfo("Друг изменён успешно");
                this._dataStore.friend = x;
                this._friend$.next(Object.assign({}, this._dataStore.friend));
                cb();
            },
        );
    }

    public reset(): void {
        this._friend$.next(Object.assign({}, this._dataStore.friend));
    }

    public storeFriendAvatar(friendId: string, blob: Blob): void {
        const url: string = API_ENDPOINTS.storeFriendAvatarUrl
            .replace("{{friendId}}", friendId);

        const formData: FormData = new FormData();
        formData.append("formFile", blob, "avatar.jpg");

        this._httpService.put(url, formData, () => {
            this._layoutService.showInfo("Аватар загружен успешно");
        });
    }
}
