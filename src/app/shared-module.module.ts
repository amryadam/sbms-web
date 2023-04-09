import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ConvertArrayToStringPipe } from './util/convert-array-to-string.pipe';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DataViewModule } from 'primeng/dataview';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [ConvertArrayToStringPipe],
  exports: [
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FocusTrapModule,
    InputNumberModule,
    InputTextModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    MenubarModule,
    MultiSelectModule,
    PanelModule,
    RadioButtonModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    TabViewModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    TreeModule,
    TreeTableModule,
    PasswordModule,
    CommonModule,
    ConvertArrayToStringPipe,
    AutoCompleteModule,
    DataViewModule,
    OverlayPanelModule,
    SidebarModule,
  ],
  imports: [
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FocusTrapModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    MenubarModule,
    MultiSelectModule,
    PanelModule,
    RadioButtonModule,
    RatingModule,
    ReactiveFormsModule,
    RippleModule,
    TabViewModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    TreeModule,
    TreeTableModule,
    PasswordModule,
    CommonModule,
    AutoCompleteModule,
    DataViewModule,
    OverlayPanelModule,
    SidebarModule,
  ],
})
export class SharedModule {}
