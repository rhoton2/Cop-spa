export interface Unit {
  id: number;
  unitName: string;
  branch: string;
  element: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  zip4: string;
  updatedDate: Date;
  isDeleted: boolean;
  unitContacts: UnitContacts[];
}

export interface UnitContacts {
  id: number;
  position: string;
  rank: string;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  mobile: string;
  work: string;
  lastUpdated: Date;

}

