<x-form-components::form wire:submit.prevent="createRole">
    <div class="space-y-6">
        {{-- role info --}}
        <x-card>
            <x-slot name="header">
                <h2>{{ __('base::roles.create.role_info_title') }}</h2>
                <p class="text-sm text-gray-500">{{ __('base::roles.create.role_info_subtitle') }}</p>
            </x-slot>

            {{-- name --}}
            <x-form-components::form-group label="{{ __('base::roles.labels.form.name') }}" name="name" inline>
                <x-form-components::inputs.input
                    wire:model.defer="state.name"
                    name="name"
                    required
                    autofocus
                    placeholder="{{ __('base::roles.labels.form.name_placeholder') }}"
                    maxlength="255"
                />
            </x-form-components::form-group>

            {{-- description --}}
            <x-form-components::form-group label="{{ __('base::roles.labels.form.description') }}" name="description" inline optional>
                <x-form-components::inputs.textarea
                    wire:model.defer="state.description"
                    name="description"
                    placeholder="{{ __('base::roles.labels.form.description_placeholder') }}"
                    maxlength="{{ \Rawilk\LaravelBase\Models\Role::MAX_DESCRIPTION_LENGTH }}"
                />

                <x-slot name="helpText">{{ __('base::messages.labels.form.max_characters', ['max' => \Rawilk\LaravelBase\Models\Role::MAX_DESCRIPTION_LENGTH]) }}</x-slot>
            </x-form-components::form-group>
        </x-card>

        {{-- permissions --}}
        <x-card>
            <x-slot name="header">
                <h2>{{ __('base::roles.create.permissions_title') }}</h2>
                <p class="text-sm text-gray-500">{{ __('base::roles.create.permissions_subtitle') }}</p>
            </x-slot>

            @include('laravel-base::livewire.roles.partials.permission-options')
        </x-card>

        @if ($errors->any())
            <x-alert :type="\Rawilk\LaravelBase\Components\Alerts\Alert::ERROR">
                {{ __('base::messages.labels.form.errors_found') }}
            </x-alert>
        @endif

        <div class="content-container lg:flex lg:flex-row-reverse lg:items-center">
            <span class="flex w-full lg:ml-3 lg:w-auto">
                <x-blade::button.button type="submit" color="blue" wire:target="createRole" right-icon="heroicon-s-check" block>
                    {{ __('base::messages.create_button') }}
                </x-blade::button.button>
            </span>

            <span class="mt-3 flex w-full lg:mt-0 lg:w-auto">
                <x-blade::button.button color="white" href="{{ url()->previous() }}" block>
                    {{ __('base::messages.cancel_button') }}
                </x-blade::button.button>
            </span>
        </div>
    </div>
</x-form-components::form>
