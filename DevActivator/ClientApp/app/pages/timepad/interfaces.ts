import { IFriend } from "../friend-editor/interfaces";
import { IApiSession, ISession } from "../meetup-editor/interfaces";
import { ISpeaker } from "../speaker-editor/interfaces";
import { ITalk } from "../talk-editor/interfaces";
import { IVenue } from "../venue-editor/interfaces";

export interface IMap<T> {
    [key: string]: T;
}

export interface ICompositeMeetup {
    id: string | undefined;
    name: string | undefined;
    venue: IVenue | undefined;
    sessions: ISession[];
    talks: IMap<ITalk>;
    speakers: IMap<ISpeaker>;
    friends: IFriend[];
}

export type IApiCompositeMeetup = ICompositeMeetup & {
    sessions: IApiSession[];
};

export interface IRandomConcatModel {
    name: string | undefined;
    venueId: string | undefined;
    friendIds: string[];
    sessions: ISession[];
    talkIds: string[];
    speakerIds: string[];
}
