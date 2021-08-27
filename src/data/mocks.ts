export const mockGroup = [
  {
    id: "one",
    seats: [
      { section: "parlour", row: "3", seat: "4" },
      { section: "dining", row: "2", seat: "1" },
    ],
  },
  {
    id: "two",
    seats: [
      { section: "parlour", row: "2", seat: "4" },
      { section: "game room", row: "1", seat: "2" },
    ],
  },
];

export const mockLayout = {
  sections: [
    {
      name: "parlour",
      rows: [
        {
          row: "1",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "4", rank: "rank1" },
            { seat: "2", rank: "rank1" },
          ],
        },
        {
          row: "2",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "5", rank: "rank1" },
            { seat: "6", rank: "rank1" },
            { seat: "4", rank: "rank1" },
            { seat: "2", rank: "rank1" },
          ],
        },
        {
          row: "3",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "5", rank: "rank1" },
            { seat: "6", rank: "rank2" },
            { seat: "4", rank: "rank2" },
            { seat: "2", rank: "rank2" },
          ],
        },
      ],
    },
    {
      name: "dining",
      rows: [
        {
          row: "1",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank2" },
            { seat: "4", rank: "rank2" },
            { seat: "2", rank: "rank1" },
          ],
        },
        {
          row: "2",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank2" },
            { seat: "5", rank: "rank2" },
            { seat: "6", rank: "rank3" },
            { seat: "4", rank: "rank3" },
            { seat: "2", rank: "rank1" },
          ],
        },
      ],
    },
    {
      name: "game room",
      rows: [
        {
          row: "1",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "2", rank: "rank1" },
          ],
        },
      ],
    },
  ],
};

export const mockLayoutMatrix = {
  dining: [
    undefined,
    [
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank2" },
      { rank: "rank2" },
    ],
    [
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank2" },
      { rank: "rank3" },
      { rank: "rank2" },
      { rank: "rank3" },
    ],
  ],
  "game room": [
    undefined,
    [{ rank: "rank1" }, { rank: "rank1" }, { rank: "rank1" }],
  ],
  parlour: [
    undefined,
    [
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
    ],
    [
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
    ],
    [
      { rank: "rank1" },
      { rank: "rank2" },
      { rank: "rank1" },
      { rank: "rank2" },
      { rank: "rank1" },
      { rank: "rank2" },
    ],
  ],
};

export const mockAllocatedSeats = {
  dining: [
    undefined,
    [
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank2" },
      { rank: "rank2" },
    ],
    [
      { id: "one", rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank2" },
      { rank: "rank3" },
      { rank: "rank2" },
      { rank: "rank3" },
    ],
  ],
  "game room": [
    undefined,
    [{ rank: "rank1" }, { id: "two", rank: "rank1" }, { rank: "rank1" }],
  ],
  parlour: [
    undefined,
    [
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
    ],
    [
      { rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
      { id: "two", rank: "rank1" },
      { rank: "rank1" },
      { rank: "rank1" },
    ],
    [
      { rank: "rank1" },
      { rank: "rank2" },
      { rank: "rank1" },
      { id: "one", rank: "rank2" },
      { rank: "rank1" },
      { rank: "rank2" },
    ],
  ],
};
