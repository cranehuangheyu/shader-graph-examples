"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class RejectionNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        let Normal = this.getInputValue(1);
        return `${this.getOutputVarName(0)} = reflect(${In}, ${Normal});`;
    }
}
exports.default = RejectionNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmbGVjdGlvbk5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC92ZWN0b3IvUmVmbGVjdGlvbk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUU7QUFFdkUsTUFBcUIsYUFBYyxTQUFRLGlCQUFVO0lBQ2pELFlBQVk7UUFDUixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLEtBQUssTUFBTSxJQUFJLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBTkQsZ0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90VHlwZSwgU2hhZGVyU2xvdCB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWplY3Rpb25Ob2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBJbiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgTm9ybWFsID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gcmVmbGVjdCgke0lufSwgJHtOb3JtYWx9KTtgO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==