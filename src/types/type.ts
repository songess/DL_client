type USER = "ADMIN" | "USER";

interface UserGroup {
  groupId: number;
  status: string;
}

export interface User {
  userId: number;
  name: string;
  studentNumber: number;
  password: string;
  role: USER;
  phoneNumber: string;
  email?: string;
  groups: UserGroup[];
}

export interface Group {
  groupId: number;
  name: string;
}


export interface Book {
  bookId: number;
  groupId: number;
  title: string;
  author: string;
  description?: string;
  category: string;
}

export interface Rent {
  rentId: number;
  bookId: number;
  userId: number;
  groupId: number;
  returnAt: Date;
  rentalPeriod: number;
  rentalCount: number;
  createdAt: Date;
}
