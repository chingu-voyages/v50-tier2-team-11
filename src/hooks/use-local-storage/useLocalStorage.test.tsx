import { renderHook } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
    test('should throw error when key parameter is null', () => {
        expect(() => {
            renderHook(useLocalStorage)
        }).toThrow('key cannot be null');
    })

    // TODO: Add more tests
})