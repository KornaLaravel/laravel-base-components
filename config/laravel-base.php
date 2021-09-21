<?php

use Rawilk\LaravelBase\Components;

return [
    /*
    |--------------------------------------------------------------------------
    | Components
    |--------------------------------------------------------------------------
    |
    | Below is a reference of all the blade components that should be loaded
    | into your app by this package. You can disable or overwrite any
    | component class or alias you want.
    |
    | These component references are mostly for convenience and can also be
    | referenced (as well as any components not listed here) by using
    | <x-laravel-base::component-name> syntax.
    |
    | Note: Any components listed here that have an array for the config
    | value shouldn't be renamed or removed from the config since the
    | underlying component will reference the config values in the
    | component's array.
    |
    */
    'components' => [

        // Alerts
        'action-message' => 'laravel-base::components.alerts.action-message',
        'alert' => Components\Alerts\Alert::class,
        'notification' => Components\Alerts\Notification::class,
        'session-alert' => Components\Alerts\SessionAlert::class,

        // Auth
        'confirms-password' => Components\Auth\ConfirmsPassword::class,

        // Button
        'button' => Components\Button\Button::class,
        'scroll-to-top-button' => 'laravel-base::components.button.scroll-to-top-button',

        // DateTime
        'countdown' => Components\DateTime\Countdown::class,

        // Elements
        'badge' => Components\Elements\Badge::class,
        'card' => Components\Elements\Card::class,
        'filter-breadcrumbs' => 'laravel-base::components.elements.filter-breadcrumbs',
        'tooltip' => Components\Elements\Tooltip::class,

        // Feeds
        'feed' => Components\Feeds\Feed::class,
        'feed-item' => Components\Feeds\FeedItem::class,

        // Layouts
        'app' => Components\Layouts\App::class,
        'html' => Components\Layouts\Html::class,

        // Lists
        'action-item' => Components\Lists\ActionItem::class,
        'action-item-list' => 'laravel-base::components.lists.action-item-list',
        'description-list' => 'laravel-base::components.lists.description-list',
        'description-list-item' => Components\Lists\DescriptionListItem::class,
        'info-list' => 'laravel-base::components.lists.info-list',
        'info-list-item' => Components\Lists\InfoListItem::class,

        // Misc
        'copy-to-clipboard' => Components\Misc\CopyToClipboard::class,

        // Modal
        'dialog-modal' => Components\Modal\DialogModal::class,
        'modal' => Components\Modal\Modal::class,
        'slide-over' => Components\Modal\SlideOver::class,
        'slide-over-form' => Components\Modal\SlideOverForm::class,

        // Navigation
        'action-menu' => Components\Navigation\ActionMenu::class,
        'dropdown' => Components\Navigation\Dropdown::class,
        'dropdown-item' => Components\Navigation\DropdownItem::class,
        'dropdown-divider' => 'laravel-base::components.navigation.dropdown-divider',
        'inner-nav' => [
            'class' => Components\Navigation\InnerNav::class,

            /*
             * This will be the default space from the top the nav links will be
             * when stickyNav is enabled.
             */
            'default_sticky_offset' => 'md:top-2',
        ],
        'inner-nav-item' => Components\Navigation\InnerNavItem::class,
        'link' => Components\Navigation\Link::class,

        // Table
        'table' => Components\Table\Table::class,
        'tr' => Components\Table\Tr::class,
        'th' => [
            'class' => Components\Table\Th::class,

            /*
             * You may customize the classes added to a <th> tag by default here instead of
             * overriding the view yourself. We've included a sensible default.
             */
            'default_class' => 'relative overflow-hidden border-blue-gray-200 bg-blue-gray-50 text-left text-blue-gray-500 text-xs leading-4 font-medium uppercase focus:outline-none tracking-wider px-6 py-3',
        ],
        'td' => Components\Table\Td::class,
        'column-select' => Components\Table\ColumnSelect::class,

        // Tabs
        'tab' => Components\Tabs\Tab::class,
        'tabs' => Components\Tabs\Tabs::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Component Prefix
    |--------------------------------------------------------------------------
    |
    | This value will a prefix for all laravel-base blade components. By
    | default it's empty. This is useful if you want to avoid collision
    | with components from other libraries.
    |
    | If set with "tw", for example, you can reference components like this:
    |
    | <x-tw-html />
    |
    */
    'component_prefix' => '',

    /*
    |--------------------------------------------------------------------------
    | LaravelBase Assets URL
    |--------------------------------------------------------------------------
    |
    | This value sets the path to the LaravelBase JavaScript assets, for cases
    | where your app's domain root is not the correct path. By default,
    | LaravelBase will load its JavaScript assets from the app's
    | "relative root".
    |
    | Examples: "/assets", "myapp.com/app",
    |
    */
    'asset_url' => null,

];
