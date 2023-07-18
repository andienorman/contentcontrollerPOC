function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function promptForName() {
    var name = '';
    while (name.trim() === '') {
        name = prompt('Enter your name:');
    }
    return name;
}

var ccLauncherConfig = {
    studentId: uuidv4(),
    studentName: promptForName(),
    postStudentData: false,
    postUrl: ''
};
