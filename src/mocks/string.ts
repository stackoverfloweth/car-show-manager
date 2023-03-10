import { MockFunction } from '@/services/mocker'
import { adjectives, nouns, pick } from '@/utilities/random'

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] as const

export const randomChar: MockFunction<typeof characters[number], []> = function() {
  return characters[Math.floor(Math.random() * characters.length)]
}

export const randomNoun: MockFunction<typeof nouns[number], []> = function() {
  return pick(nouns)
}

export const randomAdjective: MockFunction<typeof adjectives[number], []> = function() {
  return pick(adjectives)
}

export const randomString: MockFunction<string, []> = function(chars?: number) {
  if (!chars) {
    chars = this.create('number', [5, 10])
  }

  return new Array(chars).fill(null).map(() => this.create('char')).join('')
}

export const randomSentence: MockFunction<string, []> = function(words?: number) {
  if (!words) {
    words = this.create('number', [5, 10])
  }

  const [first, ...rest] = new Array(words).fill(null).map(() => this.create('string'))

  return `${first.charAt(0).toUpperCase()}${first.slice(1)} ${rest.join(' ')}.`
}

export const randomParagraph: MockFunction<string, []> = function(sentences?: number) {
  if (!sentences) {
    sentences = this.create('number', [2, 10])
  }

  return new Array(sentences).fill(null).map(() => this.create('sentence')).join(' ')
}