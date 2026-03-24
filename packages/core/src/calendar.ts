import { Core } from './core';
import { DateTime } from '@easepick/datetime';

export default class Calendar {
  public picker: Core;

  constructor(picker: Core) {
    this.picker = picker;
  }

  /**
   * Render transferred date and view
   * 
   * @param date 
   * @param view 
   */
  public render(date: DateTime, view: string): void {
    if (!date) {
      date = new DateTime();
    }

    date.setDate(1);
    date.setHours(0, 0, 0, 0);

    // find function for view
    if (typeof this[`get${view}View`] === 'function') {
      this[`get${view}View`](date);
    }
  }

  /**
   * Function for `Container` view
   * 
   * @param date 
   */
  public getContainerView(date: DateTime): void {
    this.picker.ui.container.innerHTML = '';

    if (this.picker.options.header) {
      this.picker.trigger('render', { date: date.clone(), view: 'Header' });
    }

    this.picker.trigger('render', { date: date.clone(), view: 'Main' });

    if (!this.picker.options.autoApply) {
      this.picker.trigger('render', { date: date.clone(), view: 'Footer' });
    }
  }

  /**
   * Function for `Header` view
   * 
   * @param date 
   */
  public getHeaderView(date: DateTime): void {
    const element = document.createElement('header');

    if (this.picker.options.header instanceof HTMLElement) {
      element.appendChild(this.picker.options.header);
    }

    if (typeof this.picker.options.header === 'string') {
      element.innerHTML = this.picker.options.header;
    }

    this.picker.ui.container.appendChild(element);
    this.picker.trigger('view', { target: element, date: date.clone(), view: 'Header' });
  }

  /**
   * Function for `Main` view
   *
   * @param date
   */
  public getMainView(date: DateTime): void {
    const main = document.createElement('main');
    this.picker.ui.container.appendChild(main);

    const viewMode = this.picker.options.viewMode || 'day';

    const calendars = document.createElement('div');
    calendars.className = `calendars grid-${this.picker.options.grid}`;

    if (viewMode === 'month') {
      const calendar = document.createElement('div');
      calendar.className = 'calendar';
      calendars.appendChild(calendar);

      const calendarHeader = this.getCalendarHeaderView(date.clone());
      calendar.appendChild(calendarHeader);
      this.picker.trigger('view', {
        date: date.clone(),
        view: 'CalendarHeader',
        index: 0,
        target: calendarHeader,
      });

      const monthsView = this.getCalendarMonthsView(date.clone());
      calendar.appendChild(monthsView);
      this.picker.trigger('view', {
        date: date.clone(),
        view: 'CalendarMonths',
        index: 0,
        target: monthsView,
      });

      this.picker.trigger('view', {
        date: date.clone(),
        view: 'CalendarItem',
        index: 0,
        target: calendar,
      });
    } else if (viewMode === 'year') {
      const calendar = document.createElement('div');
      calendar.className = 'calendar';
      calendars.appendChild(calendar);

      const calendarHeader = this.getCalendarHeaderView(date.clone());
      calendar.appendChild(calendarHeader);
      this.picker.trigger('view', {
        date: date.clone(),
        view: 'CalendarHeader',
        index: 0,
        target: calendarHeader,
      });

      const yearsView = this.getCalendarYearsView(date.clone());
      calendar.appendChild(yearsView);
      this.picker.trigger('view', {
        date: date.clone(),
        view: 'CalendarYears',
        index: 0,
        target: yearsView,
      });

      this.picker.trigger('view', {
        date: date.clone(),
        view: 'CalendarItem',
        index: 0,
        target: calendar,
      });
    } else {
      for (let i = 0; i < this.picker.options.calendars; i++) {
        const month = document.createElement('div');
        month.className = 'calendar';
        calendars.appendChild(month);

        const calendarHeader = this.getCalendarHeaderView(date.clone());
        month.appendChild(calendarHeader);
        this.picker.trigger('view', {
          date: date.clone(),
          view: 'CalendarHeader',
          index: i,
          target: calendarHeader,
        });

        const dayNames = this.getCalendarDayNamesView();
        month.appendChild(dayNames);
        this.picker.trigger('view', {
          date: date.clone(),
          view: 'CalendarDayNames',
          index: i,
          target: dayNames,
        });

        const daysView = this.getCalendarDaysView(date.clone());
        month.appendChild(daysView);
        this.picker.trigger('view', {
          date: date.clone(),
          view: 'CalendarDays',
          index: i,
          target: daysView,
        });

        const calendarFooter = this.getCalendarFooterView(this.picker.options.lang, date.clone());
        month.appendChild(calendarFooter);
        this.picker.trigger('view', {
          date: date.clone(),
          view: 'CalendarFooter',
          index: i,
          target: calendarFooter,
        });

        this.picker.trigger('view', {
          date: date.clone(),
          view: 'CalendarItem',
          index: i,
          target: month,
        });

        date.add(1, 'month');
      }
    }

    main.appendChild(calendars);

    this.picker.trigger('view', { date: date.clone(), view: 'Calendars', target: calendars });
    this.picker.trigger('view', { date: date.clone(), view: 'Main', target: main });
  }

  /**
   * Function for `Footer` view
   * 
   * @param date 
   */
  public getFooterView(date: DateTime): void {
    const element = document.createElement('footer');

    const buttons = document.createElement('div');
    buttons.className = 'footer-buttons';

    const cancelButton = document.createElement('button');
    cancelButton.className = 'cancel-button unit';
    cancelButton.innerHTML = this.picker.options.locale.cancel;
    buttons.appendChild(cancelButton);

    const applyButton = document.createElement('button');
    applyButton.className = 'apply-button unit';
    applyButton.innerHTML = this.picker.options.locale.apply;
    applyButton.disabled = true;
    buttons.appendChild(applyButton);
    element.appendChild(buttons);

    this.picker.ui.container.appendChild(element);
    this.picker.trigger('view', { date, target: element, view: 'Footer' });
  }

  /**
   * Function for `CalendarHeader` view
   *
   * @param date
   * @returns HTMLElement
   */
  public getCalendarHeaderView(date: DateTime): HTMLElement {
    const viewMode = this.picker.options.viewMode || 'day';
    const element = document.createElement('div');
    element.className = 'header';

    const monthName = document.createElement('div');
    monthName.className = 'month-name';

    if (viewMode === 'month') {
      monthName.innerHTML = `<span>${date.format('YYYY')}</span>`;
    } else if (viewMode === 'year') {
      const decadeStart = Math.floor(date.getFullYear() / 10) * 10;
      monthName.innerHTML = `<span>${decadeStart} - ${decadeStart + 9}</span>`;
    } else {
      monthName.innerHTML = `<span>${date.toLocaleString(this.picker.options.lang, { month: 'long' })}</span> ${date.format('YYYY')}`;
    }

    element.appendChild(monthName);

    const prevMonth = document.createElement('button');
    prevMonth.className = 'previous-button unit';
    prevMonth.innerHTML = this.picker.options.locale.previousMonth;
    element.appendChild(prevMonth);

    const nextMonth = document.createElement('button');
    nextMonth.className = 'next-button unit';
    nextMonth.innerHTML = this.picker.options.locale.nextMonth;
    element.appendChild(nextMonth);

    return element;
  }

  /**
   * Function for `CalendarMonths` view
   * Renders a 4x3 grid of months for the given year
   *
   * @param date
   * @returns HTMLElement
   */
  public getCalendarMonthsView(date: DateTime): HTMLElement {
    const element = document.createElement('div');
    element.className = 'months-grid';

    const today = new DateTime();

    for (let m = 0; m < 12; m++) {
      const monthDate = new DateTime(new Date(date.getFullYear(), m, 1));

      const monthEl = document.createElement('div');
      monthEl.className = 'month unit';
      monthEl.innerHTML = monthDate.toLocaleString(this.picker.options.lang, { month: 'short' });
      monthEl.dataset.time = String(monthDate.getTime());

      if (monthDate.getFullYear() === today.getFullYear() && m === today.getMonth()) {
        monthEl.classList.add('today');
      }

      if (this.picker.datePicked.length) {
        if (this.picker.datePicked[0].isSame(monthDate, 'month')) {
          monthEl.classList.add('selected');
        }
      } else if (this.picker.options.date) {
        const optDate = new DateTime(this.picker.options.date);
        if (optDate.isSame(monthDate, 'month')) {
          monthEl.classList.add('selected');
        }
      }

      element.appendChild(monthEl);

      this.picker.trigger('view', { date: monthDate, view: 'CalendarMonth', target: monthEl });
    }

    return element;
  }

  /**
   * Function for `CalendarYears` view
   * Renders a 4x3 grid of years for the current decade
   *
   * @param date
   * @returns HTMLElement
   */
  public getCalendarYearsView(date: DateTime): HTMLElement {
    const element = document.createElement('div');
    element.className = 'years-grid';

    const today = new DateTime();
    const decadeStart = Math.floor(date.getFullYear() / 10) * 10;

    for (let y = decadeStart; y < decadeStart + 12; y++) {
      const yearDate = new DateTime(new Date(y, 0, 1));

      const yearEl = document.createElement('div');
      yearEl.className = 'year unit';
      yearEl.innerHTML = String(y);
      yearEl.dataset.time = String(yearDate.getTime());

      if (y === today.getFullYear()) {
        yearEl.classList.add('today');
      }

      if (y < decadeStart || y > decadeStart + 9) {
        yearEl.classList.add('outside');
      }

      if (this.picker.datePicked.length) {
        if (this.picker.datePicked[0].getFullYear() === y) {
          yearEl.classList.add('selected');
        }
      } else if (this.picker.options.date) {
        const optDate = new DateTime(this.picker.options.date);
        if (optDate.getFullYear() === y) {
          yearEl.classList.add('selected');
        }
      }

      element.appendChild(yearEl);

      this.picker.trigger('view', { date: yearDate, view: 'CalendarYear', target: yearEl });
    }

    return element;
  }

  /**
   * Function for `CalendarDayNames` view
   * 
   * @param date 
   * @returns HTMLElement
   */
  public getCalendarDayNamesView(): HTMLElement {
    const element = document.createElement('div');
    element.className = 'daynames-row';

    for (let w = 1; w <= 7; w++) {
      // 7 days, 4 is «Thursday» (new Date(1970, 0, 1, 12, 0, 0, 0))
      const dayIdx = 7 - 4 + this.picker.options.firstDay + w;

      const dayName = document.createElement('div');
      dayName.className = 'dayname';
      dayName.innerHTML = new Date(1970, 0, dayIdx, 12, 0, 0, 0)
        .toLocaleString(this.picker.options.lang, { weekday: 'short' });

      dayName.title = new Date(1970, 0, dayIdx, 12, 0, 0, 0)
        .toLocaleString(this.picker.options.lang, { weekday: 'long' });

      element.appendChild(dayName);

      this.picker.trigger('view', { dayIdx, view: 'CalendarDayName', target: dayName });
    }

    return element;
  }

  /**
   * Function for `CalendarDays` view
   * 
   * @param date 
   * @returns HTMLElement
   */
  public getCalendarDaysView(date: DateTime): HTMLElement {
    const element = document.createElement('div');
    element.className = 'days-grid';
    const offsetDays = this.calcOffsetDays(date, this.picker.options.firstDay);
    const totalDays = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();

    for (let idx = 0; idx < offsetDays; idx++) {
      const offsetDay = document.createElement('div');
      offsetDay.className = 'offset';
      element.appendChild(offsetDay);
    }

    for (let idx = 1; idx <= totalDays; idx++) {
      date.setDate(idx);

      const calendarDay = this.getCalendarDayView(date);

      element.appendChild(calendarDay);

      this.picker.trigger('view', { date, view: 'CalendarDay', target: calendarDay });
    }

    return element;
  }

  /**
   * Function for `CalendarDay` view
   * 
   * @param date 
   * @returns HTMLElement
   */
  public getCalendarDayView(date: DateTime): HTMLElement {
    const optionsDate = this.picker.options.date ? new DateTime(this.picker.options.date) : null;
    const today = new DateTime();

    const element = document.createElement('div');
    element.className = 'day unit';
    element.innerHTML = date.format('D');
    element.dataset.time = String(date.getTime());

    if (date.isSame(today, 'day')) {
      element.classList.add('today');
    }

    if ([0, 6].includes(date.getDay())) {
      element.classList.add('weekend');
    }

    if (this.picker.datePicked.length) {
      if (this.picker.datePicked[0].isSame(date, 'day')) {
        element.classList.add('selected');
      }
    } else {
      if (optionsDate && date.isSame(optionsDate, 'day')) {
        element.classList.add('selected');
      }
    }

    this.picker.trigger('view', { date, view: 'CalendarDay', target: element });

    return element;
  }

  /**
   * Function for `CalendarFooter` view
   * 
   * @param lang 
   * @param date 
   * @returns HTMLElement
   */
  public getCalendarFooterView(lang: string, date: DateTime): HTMLElement {
    const element = document.createElement('div');
    element.className = 'footer';

    return element;
  }

  /**
   * Count the number of days of indentation
   * 
   * @param date 
   * @param firstDay 
   * @returns Number
   */
  public calcOffsetDays(date: DateTime, firstDay: number): number {
    let total = date.getDay() - firstDay;
    if (total < 0) total += 7;

    return total;
  }
}
