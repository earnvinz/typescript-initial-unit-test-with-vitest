export class ArrayHelper {
	static mergeAscendingArray(arr1: number[], arr2: number[]): number[] {
		let i: number = 0;
		let j: number = 0;
		const result: number[] = [];

		while (true) {
			if (i >= arr1.length) {
				while (j < arr2.length) result.push(arr2[j++]);
				break;
			}
			if (j >= arr2.length) {
				while (i < arr1.length) result.push(arr1[i++]);
				break;
			}

			if (arr1[i] <= arr2[j]) {
				result.push(arr1[i]);
				i++;
			} else {
				result.push(arr2[j]);
				j++;
			}
		}

		return result;
	}

	static merge(
		descArr: number[],
		ascArr1: number[],
		ascArr2: number[],
	): number[] {
		const ascArr = ArrayHelper.reverseArray(descArr);

		const merged12 = ArrayHelper.mergeAscendingArray(ascArr, ascArr1);

		return ArrayHelper.mergeAscendingArray(merged12, ascArr2);
	}

	static reverseArray(arr: number[]): number[] {
		const result: number[] = [];
		for (let i = arr.length - 1; i >= 0; i--) {
			result.push(arr[i]);
		}
		return result;
	}
}
