export interface Data {
  projects: number | null;
  users: number | null;
}

export interface IDirection {
  id: number;
  name: string;
}

export interface IProfession {
  id: number;
  speciality: string;
  specialization: string;
}

export interface ISkill {
  id: number;
  name: string;
}

export interface IProjectSpecialist {
  id: number;
  profession: IProfession;
  skills: ISkill[];
}

export interface IActualProject {
  id: number;
  name: string;
  started: string;
  ended: string;
  directions: IDirection[];
  project_specialists: IProjectSpecialist[];
  count: number;
  level: string;
  is_required: boolean;
}

export interface IActualProjects {
  results: IActualProject[];
}
