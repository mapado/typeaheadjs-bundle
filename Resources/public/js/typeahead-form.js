$(function() {
    $('input[data-typeahead="1"]').each(function() {
        var me = $(this),
            d = me.data(),
            realInput = $("#" + me.attr("id").replace(/_text$/, "")),
            opts = {
                id: me.attr("id").replace(/_text$/, "")
            },
            engine = new Bloodhound({
                name: opts.id,
                limit: 10,
                datumTokenizer: function(d) {
                    return Bloodhound.tokenizers.whitespace(d.val);
                },
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: d.url + "?query=%QUERY&limit=" + d.limit
                }
            });

        engine.initialize();

        me.typeahead({
            highlight: true,
            hint: false,
            autoselect: true
        }, {
            name: opts.id,
            source: engine.ttAdapter()
        });

    me.on("typeahead:selected", function(e, datum) {
        realInput.val(datum.id);
    });



















        //if (undefined !== d.delay && d.delay != '') opts.delay = d.delay;
        //if (undefined !== d.items && d.items != '') opts.items = d.items;
        //if (undefined !== d.minlength && d.minlength != '') opts.minLength = d.minlength;
        //if (undefined !== d.loadingiconurl && d.loadingiconurl != '') opts.loadingIconUrl = d.loadingiconurl;
        //if (undefined !== d.resetonselect && d.resetonselect != '') opts.resetOnSelect = d.resetonselect ? true : false;
        //if (undefined !== d.callback && d.callback != '') opts.callback = d.callback;

        //// allow the defined callback to be a function string
        //if (typeof opts.callback == 'string'
        //    && opts.callback in window
        //    && $.isFunction(window[opts.callback])) {
        //    opts.callback = window[opts.callback];
        //}

        //me.typeahead(opts);
        //$('#' + me.data('typeahead').$id.attr('id') + '_list').on({
        //    'click.lifo-typeahead': function(e){
        //        // @todo make this 'prettier' ... fade out, etc...
        //        $(this).closest('li').remove();
        //        e.preventDefault();
        //        e.stopPropagation();
        //    }
        //}, 'a');
    });
});
