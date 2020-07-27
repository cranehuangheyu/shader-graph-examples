import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class ExponentialNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarName(0)} = length(${this.getInputValue(0)});`;
    }
}