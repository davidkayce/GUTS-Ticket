export type Layout = {
  sections: {
      name: string;
      rows: {
          row: string;
          seats: {
              seat: string;
              rank: string;
          }[];
      }[];
  }[];
}

export type Group = {
  id: string;
  seats: {
      section: string;
      row: string;
      seat: string;
  }[];
}[]