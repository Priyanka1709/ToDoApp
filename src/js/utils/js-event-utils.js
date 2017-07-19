const eventMap = {
    input: {
        'bubbles': true,
        'cancelable': true
    }
};

export class JSEventUtils {
    fireEvent(elem, event) {
        var event = new Event(event, eventMap[event]);
        elem.dispatchEvent(event);
    }
}