import { describe, it, expect } from 'vitest';
import { ArrayHelper } from '~src/merge-array';

describe('ArrayHelper', () => {
	describe('merge', () => {
		it('should merge three arrays correctly', () => {
			const descArr = [5, 3, 1];
			const ascArr1 = [2, 4];
			const ascArr2 = [6, 7];
			const result = ArrayHelper.merge(descArr, ascArr1, ascArr2);
			expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
		});

		it('should handle empty arrays in merge', () => {
			const descArr: number[] = [];
			const ascArr1 = [1, 2];
			const ascArr2 = [3, 4];
			const result = ArrayHelper.merge(descArr, ascArr1, ascArr2);
			expect(result).toEqual([1, 2, 3, 4]);
		});

		it('should handle all arrays being empty', () => {
			const descArr: number[] = [];
			const ascArr1: number[] = [];
			const ascArr2: number[] = [];
			const result = ArrayHelper.merge(descArr, ascArr1, ascArr2);
			expect(result).toEqual([]);
		});

		it('should handle case where all arrays are empty', () => {
			const descArr: number[] = [];
			const ascArr1: number[] = [];
			const ascArr2: number[] = [];
			const result = ArrayHelper.merge(descArr, ascArr1, ascArr2);
			expect(result).toEqual([]);
		});
	});

	describe('mergeAscendingArray', () => {
		it('should merge sorted arrays into one sorted array', () => {
			const arr1 = [1, 3, 5];
			const arr2 = [2, 4, 6];
			const result = ArrayHelper.mergeAscendingArray(arr1, arr2);
			expect(result).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it('should handle empty arrays', () => {
			const arr1: number[] = [];
			const arr2 = [2, 4, 6];
			const result = ArrayHelper.mergeAscendingArray(arr1, arr2);
			expect(result).toEqual([2, 4, 6]);
		});

		it('should handle arrays with duplicate values', () => {
			const arr1 = [1, 3, 3];
			const arr2 = [3, 4, 5];
			const result = ArrayHelper.mergeAscendingArray(arr1, arr2);
			expect(result).toEqual([1, 3, 3, 3, 4, 5]);
		});

		it('should handle both arrays being empty', () => {
			const arr1: number[] = [];
			const arr2: number[] = [];
			const result = ArrayHelper.mergeAscendingArray(arr1, arr2);
			expect(result).toEqual([]);
		});
	});

	describe('reverseArray', () => {
		it('should reverse an array from asc to desc', () => {
			const arr = [1, 2, 3, 4, 5];
			const result = ArrayHelper['reverseArray'](arr);
			expect(result).toEqual([5, 4, 3, 2, 1]);
		});

		it('should reverse an array from asc to desc', () => {
			const arr = [5, 4, 3, 2, 1];
			const result = ArrayHelper['reverseArray'](arr);
			expect(result).toEqual([1, 2, 3, 4, 5]);
		});

		it('should handle an empty array', () => {
			const arr: number[] = [];
			const result = ArrayHelper['reverseArray'](arr);
			expect(result).toEqual([]);
		});
	});
});
