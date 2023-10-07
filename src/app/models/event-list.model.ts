export interface EventItem {
    _id: string;
    title: string;
    flyerFront?: string | null;
    attending: number;
    date: string;
    startTime?: string | null; // startTime ist optional
    endTime?: string | null;   // endTime ist optional
    contentUrl: string;
    venue: {
        id: string;
        name: string;
        contentUrl: string | null;
        live: boolean;
        direction: string;
    };
    pick?: {
        id: string;
        blurb: string;
    };
    artists: {
        id: string;
        name: string;
        _id: {
            $oid: string;
        };
    }[];
    city: string;
    country: string;
    private: boolean;
    __v: number;
}


