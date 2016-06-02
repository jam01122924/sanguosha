import { Skill } from './skill';

export enum Nation {
	'魏',
	'蜀',
	'吴',
	'群'
}
export class Character {
	name: string;
	id: string;
	hp: number;
	nation: Nation;
	skills: Skill[];
	lordSkills: Skill[];
	lord: boolean;

	constructor(name: string, id: string, hp: number, nation: Nation, lord: boolean, skills?: Skill[], lordSkills?: Skill[]) {
		this.name = name;
		this.id = id;
		this.hp = hp;
		this.nation = nation;
		this.skills = skills ? skills:[];
		this.lordSkills = lordSkills ? lordSkills:[];
		this.lord = lord;
	}
}