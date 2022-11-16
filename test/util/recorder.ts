import nock from 'nock';
import { setupRecorder } from 'nock-record';
import path from 'path';

let recorderMode = 'record';
switch (process.env.RECORDER) {
  case 'update':
    recorderMode = 'update';
    break;
  case 'dry':
    recorderMode = 'dryrun';
    break;
  case 'skip':
    recorderMode = 'wild';
    break;
}

export const recorder = async (wrappedFn: () => Promise<void>) => {
  const { testPath, currentTestName } = expect.getState();
  const recordingName = `recorded-${currentTestName?.replace(/\s+/g, '_')}`;

  const record = setupRecorder({
    fixturePath: path.join(testPath!, '..', '__fixtures__'),
    mode: recorderMode as nock.BackMode,
  });
  const recording = await record(recordingName);

  await wrappedFn();

  recording.completeRecording();
  recording.assertScopesFinished();

  if (recorderMode === 'wild') {
    console.log(
      `[RECORDER] Recording skipped. All requests go out to the internet (${recording.scopes.length} requests).`,
    );
  } else if (recorderMode === 'update') {
    console.log(`[RECORDER] Recording updated: ${recordingName}.json`);
  } else if (recorderMode === 'record' && !recording.isLoaded) {
    console.log(`[RECORDER] Recording created: ${recordingName}.json`);
  } else if (recording.isLoaded) {
    console.log(`[RECORDER] Recording loaded: ${recordingName}.json`);
  }
};
