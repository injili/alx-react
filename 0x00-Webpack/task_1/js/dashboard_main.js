import $ from 'jquery';
import _ from 'lodash';

$('body').appeng('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>CLick here to get started</button>')
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>')

let theCount = 0;
function updateCounter() {
    theCount ++;
    $('#count').html(`${theCount} clicks on the button`); 
};

$('button').on('click', _.debounce(updateCounter, 500));