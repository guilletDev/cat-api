// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'

test('App show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContext = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log(textContext, imageSrc)
  await expect(textContext?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red')).toBeTruthy()

});

