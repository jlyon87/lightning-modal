# lightning-modal

> A generic SLDS Modal with header, body, and footer sections.

## Usage

Wrap the Modal component within your parent component. In this example, ContactEditModal manages the page actions for the components placed within the Modal. E_Modal event is used to communicate the visibility of the modal component. When we click cancel or close, the event is fired, handled by a parent to change the boolean `isShown` attribute.

```html
<!-- ContactEditModal -->
<aura:component description="ContactEditModal" >
    <aura:attribute name="accountId" type="Id" />
    <aura:attribute name="contact" type="Contact" />
    <aura:attribute name="isShown" type="Boolean" />
    <aura:attribute name="isSaveDisabled" type="Boolean" default="true" />

    <aura:registerEvent name="save" type="c:E_Contact" />

    <aura:handler name="validate" event="c:E_FormInput" action="{!c.handleValidate}" />
    <aura:handler name="change" value="{!v.isShown}" action="{!c.isShownChanged}" />

    <c:ModalLayout header="Edit Contact" isShown="{!v.isShown}">

        <c:ContactEditForm contact="{!v.contact}" />

        <aura:set attribute="footer" >
            <lightning:button
                label="Cancel"
                onclick="{!c.clickedCancel}" />
            <lightning:button
                disabled="{!v.isSaveDisabled}"
                variant="brand"
                label="Save"
                onclick="{!c.onSubmit}" />
        </aura:set>
    </c:ModalLayout>
</aura:component>
```
