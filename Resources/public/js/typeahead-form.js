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
    });
});
