import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import Main from './components/Main';

test('renders the landing page', () => {
  render(<App />);
});


test('renders the table header', () => {
  render(<Header />);
});

test('table header contains expected headings', () => {
  render(<Header />)
  const row = screen.getByRole('row').children;
  expect(row[0].textContent).toBe('id');
  expect(row[1].textContent).toBe('image');
  expect(row[2].textContent).toBe('name');
  expect(row[3].textContent).toBe('audienceType');
  expect(row[4].textContent).toBe('status');
  expect(row[5].textContent).toBe('organisation');
  expect(row[6].textContent).toBe('region');
  expect(row[7].textContent).toBe('campaignId');
  expect(row[8].textContent).toBe('campaignName');
  expect(row[9].textContent).toBe('watchers');
  expect(row[10].textContent).toBe('dueDate');
  expect(row[11].textContent).toBe('lastModifiedDate');
  expect(row[12].textContent).toBe('lastModifiedBy');
  expect(row[13].textContent).toBe('createdDate');
  expect(row[14].textContent).toBe('createdBy');
  expect(row[15].textContent).toBe('comments');
  expect(row[16].textContent).toBe('type');
  expect(row[17].textContent).toBe('workOrderId');
  expect(row[18].textContent).toBe('sceneCount');
});


test('renders the table body', () => {
  render(<Main />);
});

test('table bodies contains expected contents', () => {
  render(<Main />);
  const row = screen.getByRole('rows').children[0].children;
  expect(row[0].textContent).toBe('d9ea570e-21d2-423f-8dd6');
});


