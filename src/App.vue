<template>
  <section class="theater">
    <section>
      <div
        v-for="(value, name) in allocation"
        :key="name"
        class="theater-section"
      >
        <h3 class="section-name" :key="name">{{ name }}</h3>
        <table class="seats-container">
          <tr
            v-for="(row, rowIndex) in value"
            :key="rowIndex"
            class="seats-row"
          >
            <td v-for="(seat, seatIndex) in row" :key="seatIndex">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path
                  :class="classifier(seat?.id, seat?.rank)"
                  d="M36,17.3H80.4a8.88,8.88,0,0,1,6.72-7.25A5.77,5.77,0,0,0,81.57,6H36a5.72,5.72,0,0,0-5.76,5.66A5.71,5.71,0,0,0,36,17.3Z"
                />
                <path
                  :class="classifier(seat?.id, seat?.rank)"
                  d="M80.29,82.79H36A5.66,5.66,0,1,0,36,94.1H81.47a6.13,6.13,0,0,0,5.44-3.41A8.77,8.77,0,0,1,80.29,82.79Z"
                />
                <path
                  :class="classifier(seat?.id, seat?.rank)"
                  d="M80.08,79.7V20.5H35.92A8.85,8.85,0,0,1,27.17,13h-18a4,4,0,0,0-4.06,4V82.79a4,4,0,0,0,4.06,3.95H27.28a8.65,8.65,0,0,1,8.75-7Z"
                />
                <path
                  :class="classifier(seat?.id, seat?.rank)"
                  d="M89.15,12.93a5.71,5.71,0,0,0-5.76,5.65V82.15a5.76,5.76,0,0,0,11.52,0V18.58A5.71,5.71,0,0,0,89.15,12.93Z"
                />
                <path
                  :class="classifier(seat?.id, seat?.rank)"
                  d="M90.21,9.94a8.93,8.93,0,0,0-8.74-7H36a8.94,8.94,0,0,0-8.75,6.93H9.15A7.22,7.22,0,0,0,2,17V82.79a7.06,7.06,0,0,0,7.15,7h18a8.85,8.85,0,0,0,8.75,7.26H81.47A8.91,8.91,0,0,0,90,90.9a8.81,8.81,0,0,0,8-8.75V18.58A8.84,8.84,0,0,0,90.21,9.94ZM36,6H81.57a5.77,5.77,0,0,1,5.55,4.06A8.88,8.88,0,0,0,80.4,17.3H36a5.71,5.71,0,0,1-5.76-5.65A5.72,5.72,0,0,1,36,6ZM27.28,86.74H9.15a4,4,0,0,1-4.06-3.95V17a4,4,0,0,1,4.06-4h18a8.85,8.85,0,0,0,8.75,7.47H80.08V79.7H36A8.65,8.65,0,0,0,27.28,86.74ZM81.47,94.1H36a5.66,5.66,0,1,1,0-11.31H80.29a8.77,8.77,0,0,0,6.62,7.9A6.13,6.13,0,0,1,81.47,94.1ZM94.91,82.15a5.76,5.76,0,0,1-11.52,0V18.58a5.76,5.76,0,0,1,11.52,0Z"
                />
              </svg>
            </td>
          </tr>
        </table>
      </div>
    </section>
    <article>
      <div class="card">
        <h3>Properties</h3>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item"><span class="group one" /> Group 1</li>
            <li class="list-group-item"><span class="group two" /> Group 2</li>
            <li class="list-group-item">
              <span class="group three" /> Group 3
            </li>
            <li class="list-group-item"><span class="rank one" /> Rank 1</li>
            <li class="list-group-item"><span class="rank two" /> Rank 2</li>
            <li class="list-group-item"><span class="rank three" /> Rank 3</li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { defineComponent } from "vue";
import { layout, groups } from "./data";

export default defineComponent({
  name: "App",
  setup() {
    const buffer = {} as any;
    const allocation = ref<any>({});

    const idMap = {
      "+31611111111": "group1",
      "+31622222222": "group2",
      "+31633333333": "group3",
    };

    const drawSeats = () => {
      for (let i = 0, section; (section = layout.sections[i++]); ) {
        buffer[section.name] = [];
        for (let j = 0, row; (row = section.rows[j++]); ) {
          buffer[section.name][j] = [];
          for (let k = 0, seat; (seat = row.seats[k++]); ) {
            buffer[section.name][j][+seat.seat -1] = { rank: seat.rank };
          }
        }
      }
    };
    
    const allocateSeats = () => {
      for (let a = 0, group; (group = groups[a++]); ) {
        for (let b = 0, seat; (seat = group.seats[b++]); ) {
          buffer[seat.section][+seat.row][+seat.seat - 1]['id'] = group.id;
        }
      }
    };

    const classifier = (id: string, rank: number): string => {
      if (!id && !rank) return "seat";
      return `seat ${idMap[id] || ""} ${rank}`;
    };

    onMounted(() => {
      drawSeats();
      allocateSeats();
      allocation.value = buffer;
    });

    return {
      allocation,
      classifier,
    };
  },
});
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
