/*
 Copyright (c) 2021-2024 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/**
 * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
 * The following section is auto-generated.
 * ========================= !DO NOT CHANGE THE FOLLOWING SECTION MANUALLY! =========================
 */
/* eslint-disable max-len */
import type { EffectAsset } from '../../asset/assets';
import type { DescriptorSetLayout, Device, PipelineLayout, PipelineState, Shader, ShaderInfo } from '../../gfx';
import type { MacroRecord } from '../../render-scene/core/pass-utils';
import type { IProgramInfo } from '../../render-scene/core/program-lib';

export interface ProgramProxy {
    readonly name: string;
    readonly shader: Shader;
}

export interface ProgramLibrary {
    addEffect (effectAsset: EffectAsset): void;
    precompileEffect (device: Device, effectAsset: EffectAsset): void;
    getKey (
        phaseID: number,
        programName: string,
        defines: MacroRecord): string;
    getPipelineLayout (
        device: Device,
        phaseID: number,
        programName: string): PipelineLayout;
    getMaterialDescriptorSetLayout (
        device: Device,
        phaseID: number,
        programName: string): DescriptorSetLayout;
    getLocalDescriptorSetLayout (
        device: Device,
        phaseID: number,
        programName: string): DescriptorSetLayout;
    getProgramInfo (phaseID: number, programName: string): IProgramInfo;
    getShaderInfo (phaseID: number, programName: string): ShaderInfo;
    getProgramVariant (
        device: Device,
        phaseID: number,
        name: string,
        defines: MacroRecord,
        key?: string): ProgramProxy | null;
    getBlockSizes (phaseID: number, programName: string): number[];
    getHandleMap (phaseID: number, programName: string): Record<string, number>;
    getProgramID (phaseID: number, programName: string): number;
    getDescriptorNameID (name: string): number;
    getDescriptorName (nameID: number): string;
}
