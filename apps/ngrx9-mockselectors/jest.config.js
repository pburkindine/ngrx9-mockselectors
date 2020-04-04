module.exports = {
  name: 'ngrx9-mockselectors',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrx9-mockselectors',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
