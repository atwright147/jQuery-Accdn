# jquery.accdn

A simple, lightweight jQuery plugin for Accordions and FAQs.

## Installation

Include script *after* the jQuery library:

    <script type="text/javascript" src="/path/to/jquery.accdn.js"></script>

Optionally, you can include the jQuery Easing Library OR jQuery UI (to allow you to use different easing styles):

    <script type="text/javascript" src="path/to/jquery.easing.min.js"></script>

## Usage

Create appropriate HTML:

    <dl class="js-accordion faq">
        <dt>Accordion Title</dt>
            <dd>Lorem ipsum dolor sit amet.</dd>
        <dt class="open">Accordion Title</dt>
            <dd>Lorem ipsum dolor sit amet.</dd>
        <dt>Accordion Title</dt>
            <dd>Lorem ipsum dolor sit amet.</dd>
        <dt class="open">Accordion Title</dt>
            <dd>Lorem ipsum dolor sit amet.</dd>
        <dt>Accordion Title</dt>
            <dd>Lorem ipsum dolor sit amet.</dd>
    </dl>

Create a jQuery selector to select the markup:

    $('.js-accordion').accdn();

*Note: your HTML must be a definition list (`<dl>`) with a `<dt>` for the title, heading or question (whatever you choose to call it) and a `<dd>` for the content or answer.*

## Options

### Open CSS Class

    open_class: 'open'

Define the CSS class to apply to open accordion `<dt>`s. This also changes which CSS class the plugin looks for to leave accordion sections open when initialising. Default: `open`.

### Closed CSS Class

    closed_class: 'closed'

See open_class above. Default: `closed`.

### Mouse Cursor for Headers

    cursor: 'pointer'

Define the CSS cursor to show when hovering over each accordion headet (`<dt>`). Default: `pointer`.

### Animation Speed (for opening and closing)

    speed: 'fast'
    speed: 'slow'
    speed: 1000

Define the speed at which accordion sections should open and close. Default: `fast` (internal jQuery alias for 800ms).

### Easing

    easing: 'linear'

Define the easing style to use when opening and closing accordion sections. Set to any valid easing name from the jQuery UI or Easing Library. You must also include the appropriate easing library *before* Default: `false`.

### Mode (choose what gets opened by default)

    mode: 'class'
    mode: 'first'
    mode: 'hash'

Define how the accordion plugin should behave. 
- If set to `class`, the plugin will leave the `<dd>` a `<dt>` with a CSS class equal to `open_class` open and close all others. If no `<dt>` has this class, all `<dd>` will be closed.
- If set to `first`, oly the first accordion section of any selected `<dl>` will be opened (ignoring and item with the `open_class` added to it).
- If set to `hash`, the plugin will open any accordion section with a CSS class applied to it that matches the URL hash tag (e.g. `http://example.com#faq2`) would result in all accordion sections with the CSS class `faq2` applied starting out open.

## Tips and Tricks

### Be more flexible

What if I want to use the URL hash when one is set but otherwise use inline classes? Easy -- try the following snippet:

    if(location.hash.length > 0) {
        mode = 'hash';
    } else {
        mode = 'class';
    }
    $('<selector>').accdn({'mode': mode});

Basically, this checks if a url hash has been set `if(location.hash.length > 0)` then based on this sets the `mode`. This `mode` is then passed to the script initiator. Have fun...

## Development

- Source hosted at [GitHub](https://github.com/atwright147/jquery-accdn)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/atwright147/jquery-accdn/issues)

Pull requests are very welcome! Make sure your patches are well tested. Please create a topic branch for every separate change you make.

## Authors

[Andy Wright](https://github.com/atwright147)

*This readme is based on the readme by carhartl for his jquery-cookie plugin*

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/fa69df848b1e29f388925c9b673f72e6 "githalytics.com")](http://githalytics.com/atwright147/jQuery-Accdn)