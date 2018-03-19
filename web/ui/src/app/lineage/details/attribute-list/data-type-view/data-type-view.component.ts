/*
 * Copyright 2017 Barclays Africa Group Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Input} from "@angular/core";
import {TreeNode} from "angular-tree-component";
import {typeOfDataType} from "../../../types";

@Component({
    selector: "data-type-view",
    templateUrl: "data-type-view.component.html",
    styleUrls: ["data-type-view.component.less"]
})
export class DataTypeViewComponent {
    @Input() node: TreeNode

    getTypeOfType(): string {
        return typeOfDataType(this.node.data.type)
    }

    toggleExpanded(e: Event) {
        this.node.toggleExpanded()
        DataTypeViewComponent.suppressBrowserNativeBehaviour(e)
    }

    private static suppressBrowserNativeBehaviour(event:Event) {
        event.stopPropagation()
        let btn = <HTMLButtonElement> event.srcElement
        btn.blur()
    }
}