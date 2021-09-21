import refs from "../refs";

const onOpenCalendar = (e) => {
    if(e.target.classList.contains('calendar-btn')){
        refs.calendar.classList.remove('hide-calendar'); 
        //refs.loadCalendar.innerHTML = `<div id='main-calendar' w-type="calendar" w-tmapikey="9tvGazI5GRqdFrE6bp2dWyynwysgf3qO" w-googleapikey="AIzaSyDauxZDwxyrTc6PcNG6P-nC-ZbtfZJ-sxw" w-keyword="" w-theme="calendar" w-colorscheme="dark" w-width="250" w-height="350" w-size="25" w-border="1" w-borderradius="4" w-postalcode="" w-radius="25" w-countrycode="US" w-city="Los Angeles" w-period="week" w-periodweek="week" w-layout="vertical" w-classificationid="" w-attractionid="" w-promoterid="" w-venueid="" w-affiliateid="" w-segmentid="" w-proportion="standart" w-latlong=""></div>`
    }
        
}

const onCloseCalendar = (e) => {
    console.log(e.target.classList.contains('icon-close-calender'));
    if (e.target.classList.contains('icon-close-calender')){
        refs.calendar.classList.add('hide-calendar');
    }
}
refs.calendarBtn.addEventListener("click", onOpenCalendar);
refs.calendar.addEventListener("click", onCloseCalendar);
