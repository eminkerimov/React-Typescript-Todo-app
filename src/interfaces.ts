import { ChangeEvent } from "react";

export interface ITask {
    taskName: string;
    deadline: number | null;
} 

export type IEventType = ChangeEvent<HTMLInputElement>;
