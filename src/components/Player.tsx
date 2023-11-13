import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

interface VideoPlayerProps {
  videoSource: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {
  const videoRef = useRef<VideoRef>(null);
  
  const videoLink = `https://www.googleapis.com/drive/v3/files/${videoSource}?key=${apiKey}&alt=media`
  //Vídeo de exemplo para testar o player
  const videoExemple = `https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4`

  return (
    <View style={styles.container}>
          <Video
            ref={videoRef}
            source={{ uri: videoExemple }}
            style={styles.video}
            controls={true}
            paused={false}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPlayer;