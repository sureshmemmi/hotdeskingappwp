export interface IDesks {
    id: number;
    deskType: string;
    deskLocation: string;
}

export let DeskList: IDesks[] = [
    {
        id: 1,
        deskType: "Standard",
        deskLocation: "Wing A"
    },
    {
        id: 2,
        deskType: "Standing",
        deskLocation: "Wing B"
    },
    {
        id: 3,
        deskType: "Standard",
        deskLocation: "Wing B"
    },
    {
        id: 4,
        deskType: "Standing",
        deskLocation: "Wing A"
    },
    {
        id: 5,
        deskType: "Standard",
        deskLocation: "Wing B"
    },
    {
        id: 6,
        deskType: "Standing",
        deskLocation: "Wing C"
    }
]