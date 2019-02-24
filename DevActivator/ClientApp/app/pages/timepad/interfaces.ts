import { IFriend } from "../friend-editor/interfaces";
import { IApiSession, ISession } from "../meetup-editor/interfaces";
import { ISpeaker } from "../speaker-editor/interfaces";
import { ITalk } from "../talk-editor/interfaces";

export interface IMap<T> {
    [key: string]: T;
}

export interface ICompositeMeetup {
    sessions: ISession[];
    talks: IMap<ITalk>;
    speakers: IMap<ISpeaker>;
    friends: IFriend[];
}

export type IApiCompositeMeetup = ICompositeMeetup & {
    sessions: IApiSession[];
};

export interface IRandomConcatModel {
    friendIds: string[];
    sessions: ISession[];
    talkIds: string[];
    speakerIds: string[];
}
