<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="black">
          <v-btn color="green lighten-1" dark @click.stop="dialog = true">Enter your day!</v-btn>
          <v-btn outlined class="mr-4" @click="setToday">Today</v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn outlined v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent">
              <v-select
                :items="condition"
                v-model="condition"
                label="Select your condition today! (Required)"
              ></v-select>
              <v-select :items="smoke" v-model="smoke" label="Did you smoke today? (Required)"></v-select>
              <v-text-field
                v-if="smoke == 'Yes'"
                v-model="numcig"
                type="counter"
                label="If yes: number of cigarette you smoked"
              ></v-text-field>
              <!-- <v-select :items="pill" v-model="taken_pill" label="Taken your pills? (Required)"></v-select> -->
              <v-select :items="inhaler" v-model="inhaler" label="Used your inhaler? (Required)"></v-select>
              <v-row justify="center"></v-row>
              <v-btn
                type="submit"
                color="green lighten-1"
                class="mr-4"
                @click.stop="dialog = false"
              >create event</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="green lighten-1"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          full-width
          offset-x
        >
          <v-card color="green lighten-1" :width="350" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <form v-if="currentlyEditing !== selectedEvent.id">{{ selectedEvent.details }}</form>
              <form v-else>
                <textarea-autosize
                  v-model="selectedEvent.details"
                  type="text"
                  style="width: 100%"
                  :min-height="100"
                  placeholder="add note"
                ></textarea-autosize>
              </form>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="green lighten-1" @click="selectedOpen = false">close</v-btn>
              <v-btn
                v-if="currentlyEditing !== selectedEvent.id"
                text
                @click.prevent="editEvent(selectedEvent)"
              >edit</v-btn>
              <v-btn text v-else type="submit" @click.prevent="updateEvent(selectedEvent)">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import { db } from "@/main";
export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days"
    },
    condition: [
      "Very Good",
      "Somewhat Good",
      "Neither Good Nor Bad",
      "Somewhat Bad",
      "Very Bad"
    ],

    // pill: ["Yes", "No"],
    smoke: ["Yes", "No"],
    inhaler: ["Yes", "No"],
    numcig: null,

    // name: null,
    // details: null,
    // start: null,
    // // start: null,
    // startTime: null,
    // //endTime:null,
    // //end: null,
    color: "#1976D2", // default event color
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false
  }),
  mounted() {
    this.getEvents();
  },
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const condition = this.condition;
      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;
      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;
      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);
      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  methods: {
    allowedHours: v => v % 2,

    async getEvents() {
      let snapshot = await db.collection("patient").get();
      let events = [];
      snapshot.forEach(doc => {
        let appData = doc.data();
        console.log(appData);
        appData.id = doc.id;
        events.push(appData);
      });
      this.events = events;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    async addEvent() {
      if (this.condition && this.smoke && this.inhaler) {
        await db.collection("patient").add({
          condition: this.condition,
          smoke: this.smoke,
          inhaler: this.inhaler,
          numcig: this.numcig
          //color: this.color
        });
        //this.getEvents();
        (this.condition = ""),
          (this.smoke = ""),
          (this.inhaler = ""),
          (this.numcig = "");
        alert("Succeessfully added");
        //((this.condition = "")),
        //(this.smoke = ""),
        //(this.inhaler = "");
        //this.details = '',
        // (this.start = ""),
        // (this.startTime = "");
        //this.endTime = '',
        //this.end = '',
        //this.color = ''
      } else {
        alert(
          "You must select a condition, whether you smoked, and used your inhaler"
        );
      }
    },
    editEvent(ev) {
      this.currentlyEditing = ev.id;
    },
    async updateEvent(ev) {
      await db
        .collection("patient")
        .doc(this.currentlyEditing)
        .update({
          details: ev.details
        });
      (this.selectedOpen = false), (this.currentlyEditing = null);
    },
    async deleteEvent(ev) {
      await db
        .collection("patient")
        .doc(ev)
        .delete();
      (this.selectedOpen = false), this.getEvents();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    }
  }
};
</script>
