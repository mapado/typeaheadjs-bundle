typeahead-js bundle
==================

This bundle provide [typeahead.js](https://github.com/twitter/typeahead.js) form type integration into a Symfony project.


## Instalation
Install with composer:
```sh
$ composer require mapado/typeaheadjs-bundle
```

Update your ```app/AppKernel.php``` file:
```php
$bundles = array(
    // ...
    new Mapado\TypeaheadJsBundle\MapadoTypeaheadJsBundle(),
);
```

Update your ```app/config/config.yml``` file to provide twig form template:
```yaml
twig:
    form:
        resources:
            - 'MapadoTypeaheadJsBundle:Form:fields.html.twig'
```

Use your assets manager to include this file: ```Resources/public/js/typeahead-form.js```


## Usage
Usage is very simple:
```php
$builder->add('user', 'typeahead', [ 'url' => $searchUrl ]);
```

You need to pass the `$searchUrl` as a parameter.

### Ajax response
The response must be a JSON array in the following format:
```json
[
    { "id": 1, "value": "Foo" },
    { "id": 2, "value": "Bar" }
]
```


## Note
This bundle is greatly inspired by [Lifo101 typeahead bundle](https://github.com/lifo101/typeahead-bundle) but it does work with the typeahead-js new version of typeahead.

It does not requires bootstrap, and supports a lot less features for now.


Feel free to make a PR  or open an issue if you want to add stuff.
