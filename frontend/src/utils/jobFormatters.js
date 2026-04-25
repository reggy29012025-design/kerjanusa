export const EXPERIENCE_LEVEL_LABELS = {
  entry: 'Entry Level (Freshgraduate)',
  junior: 'Junior Level (1 - 3 tahun)',
  mid: 'Mid Level (3 - 5 tahun)',
  senior: 'Senior Level (5 + tahun)',
};

export const WORK_MODE_LABELS = {
  wfo: 'WFO',
  hybrid: 'Hybrid (Campuran)',
  wfh: 'WFH',
};

export const INTERVIEW_TYPE_LABELS = {
  onsite: 'Tatap muka di lokasi',
  online: 'Online / Video Call',
  phone: 'Telepon',
  hybrid: 'Hybrid (Campuran)',
};

export const VIDEO_SCREENING_LABELS = {
  required: 'Video Identitas Wajib',
  optional: '',
};

const startCase = (value = '') =>
  String(value)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());

export const formatExperienceLevel = (value = '') =>
  EXPERIENCE_LEVEL_LABELS[value] || startCase(value) || '-';

export const formatWorkMode = (value = '') => WORK_MODE_LABELS[value] || startCase(value) || '-';

export const formatInterviewType = (value = '') =>
  INTERVIEW_TYPE_LABELS[value] || startCase(value) || '-';

export const formatVideoScreeningRequirement = (value = '') =>
  VIDEO_SCREENING_LABELS[value] || '';
